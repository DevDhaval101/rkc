"use client";

import HeaderGuj from "@/app/components/headerGuj";

import ContactInput from "@/app/ui/contactInput";
import SubmitBtn from "@/app/ui/submitBtn";

import { submitAction } from "@/app/serverActions/actions";

import { useFormState } from "react-dom";
import { useState } from "react";

import FlashMessage from "@/app/components/FlashMessage";

export default function EstimatePage() {
  const [state, formAction] = useFormState(submitAction, {});
 
  return (
    <div>
      <HeaderGuj />

      <div className="flex justify-center">
        <form
          action={formAction}
          className="border w-[80%] flex flex-col gap-4 p-4"
        >
          <ContactInput label="નામ:" type="text" name="clientName" />
          <ContactInput label="મોબાઇલ નંબર:" type="text" name="clientMoNum" />
          <ContactInput label="ઘરનુ સરનામુ:" type="textarea" name="clientAdd" />
          <ContactInput label="ઓર્ડર તારીખ:" type="text" name="orderDate" />
          <ContactInput
            label="પ્રસંગનુ સરનામુ:"
            type="textarea"
            name="eventAddress"
          />
          <ContactInput label="હસ્તક:" type="text" name="referer" />
          <ContactInput label="મોબાઇલ નંબર:" type="text" name="refererMo" />
          <div>
            <label htmlFor="" className="text-5xl">
              સ્થળે રહેનારના નામ:
            </label>
            <div className="ml-24">
              <ContactInput label="નામ:" name="spotPerson_1" />
              <ContactInput
                label="મોબાઇલ નંબર:"
                type="text"
                name="spotPerson_1_Mo"
              />
            </div>
            <div className="ml-24">
              <ContactInput label="નામ:" name="spotPerson_2" />
              <ContactInput
                label="મોબાઇલ નંબર:"
                type="text"
                name="spotPerson_2_Mo"
              />
            </div>
            <div className="flex justify-center">
              <div>
                <button className="w-content bg-green-400 border rounded-md px-2 py-1 text-xl">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div>
        <div className="border border-black"></div>
      </div>
    </div>
  );
}
