'use client'; 

import React from 'react';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
// 1. IMPORTA EL TIPO Y LA FUNCIÓN
import { sendContactMessage, type FormState } from '../actions';

// (El componente SubmitButton no cambia)
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 disabled:bg-gray-500 transition-colors"
    >
      {pending ? 'Enviando...' : 'Enviar Mensaje'}
    </button>
  );
}

export default function ContactoPage() {
  // 2. ACTUALIZA EL ESTADO INICIAL
  // Ahora usa el tipo 'FormState' y 'undefined' en lugar de 'null'
  const initialState: FormState = {
    message: undefined,
    errors: {},
  };
  const [state, dispatch] = useActionState(sendContactMessage, initialState);

  return (
    <div className="text-foreground bg-background">
      
      {/* Sección 1: Título (sin cambios) */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Contáctanos
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
          ¿Listo para mejorar tu espacio? Hablemos.
          Completa el formulario o llámanos directamente.
        </p>
      </section>

      {/* Sección 2: Formulario y Datos (sin cambios en el HTML) */}
      <section className="container mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Columna Izquierda: Información (sin cambios) */}
          <div className="text-foreground">
            <h2 className="text-3xl font-bold mb-6">
              Información Directa
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Correo Electrónico</h3>
                <p className="text-foreground/70">
                  grupointegradoberbozeirl@gmail.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Llámanos</h3>
                <p className="text-foreground/70">(51) 934339277</p>
                <p className="text-foreground/70">(51) 993718535</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Redes Sociales</h3>
                <p className="text-foreground/70">Grupo Integrado Berboz</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario CONECTADO (sin cambios en el HTML) */}
          <div className="text-foreground">
            <h2 className="text-3xl font-bold mb-6">
              Envíanos un Mensaje
            </h2>
            
            <form action={dispatch} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-foreground/5 border border-foreground/10"
                />
                {state.errors?.name && <p className="text-sm text-red-500 mt-1">{state.errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-foreground/5 border border-foreground/10"
                />
                {state.errors?.email && <p className="text-sm text-red-500 mt-1">{state.errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-2 rounded bg-foreground/5 border border-foreground/10"
                ></textarea>
                {state.errors?.message && <p className="text-sm text-red-500 mt-1">{state.errors.message}</p>}
              </div>
              
              <SubmitButton />

              {state.message && <p className="text-sm text-green-500 mt-2">{state.message}</p>}
              {state.errors?.api && <p className="text-sm text-red-500 mt-2">{state.errors.api}</p>}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}