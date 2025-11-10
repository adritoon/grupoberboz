'use server';

import { z } from 'zod';
import { Resend } from 'resend';

// 1. EL CONTRATO (NUEVO)
// Define la forma exacta de nuestro estado
export type FormState = {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
    api?: string; // Para errores generales
  };
};

const resend = new Resend(process.env.RESEND_API_KEY);

const FormSchema = z.object({
  name: z.string().min(2, { message: 'Tu nombre es muy corto.' }),
  email: z.string().email({ message: 'Por favor, ingresa un email válido.' }),
  message: z.string().min(5, { message: 'Tu mensaje es muy corto.' }),
});

// 2. LA FUNCIÓN (ACTUALIZADA)
// Ahora usa 'FormState' como tipo de entrada y de salida (Promise<FormState>)
export async function sendContactMessage(
  prevState: FormState, 
  formData: FormData
): Promise<FormState> { // <-- Tipo de retorno actualizado
  
  const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'el-email-que-usaste-para-registrarte-en-resend.com', // <-- RECUERDA CAMBIAR ESTO
      subject: `Nuevo Mensaje de Contacto de: ${name}`,
      html: `
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { message: '¡Mensaje enviado con éxito!' };
  } catch (error) {
    return { errors: { api: 'Error al enviar el mensaje. Intenta más tarde.' } };
  }
}