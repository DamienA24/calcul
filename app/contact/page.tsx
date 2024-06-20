"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const Contact = () => {
  const { toast } = useToast();

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ""
        );
        if (result.status === 200) {
          toast({
            title: "Succés",
            description: "Email envoyé avec succès",
          });
          form.current.reset(); // Réinitialiser le formulaire après l'envoi
        }
      } catch (error) {
        toast({
          title: "Erreur",
          description: "Une erreur s'est produite lors de l'envoi, réessayez",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Nous Contacter</h1>
        <p className="text-center mb-8">
          Si vous avez des questions, des suggestions ou des préoccupations
          concernant notre application de conversion d&apos;heures en centièmes,
          n&apos;hésitez pas à nous contacter. Nous sommes là pour vous aider
          avec :
        </p>
        <ul className="list-disc list-inside mb-8">
          <li>Problèmes techniques ou bugs</li>
          <li>Suggestions d&apos;amélioration</li>
          <li>Questions sur l&apos;utilisation de l&apos;application</li>
          <li>Retours généraux et commentaires</li>
        </ul>
        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="name" // Ajoutez les attributs name pour chaque champ
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email" // Ajoutez les attributs name pour chaque champ
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message" // Ajoutez les attributs name pour chaque champ
              className="w-full mt-1 p-2 border border-gray-300 rounded"
              placeholder="Votre message"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit" // Remettre le type submit ici
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Contact;
