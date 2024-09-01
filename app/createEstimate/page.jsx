"use client";

import HeaderGuj from "@/app/components/headerGuj";

import ContactInput from "@/app/ui/contactInput";
import SubmitBtn from "@/app/ui/submitBtn";

import { submitAction } from "@/app/serverActions/actions";

import { useFormState } from "react-dom";
import { useState } from "react";

import FlashMessage from "@/app/components/FlashMessage";

import { useSession } from "next-auth/react"

import { redirect } from 'next/navigation'

export default function EstimatePage() {
  const [state, formAction] = useFormState(submitAction, {});
  // const router = useRouter()

  const session = useSession()
  // console.log(session)

  if(session.status === "unauthenticated"){
    redirect('/signin')
  }

  return (
    <div>
      <HeaderGuj />

      <div className="flex justify-center">
        <form
          action={formAction}
          className="border md:w-[80%] w-[95%] flex flex-col gap-4 p-4"
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
            <label htmlFor="" className="md:text-5xl text-base">
              સ્થળે રહેનારના નામ:
            </label>
            <div className="md:ml-24 ml-10">
              <ContactInput label="નામ:" name="spotPerson_1" />
              <ContactInput
                label="મોબાઇલ નંબર:"
                type="text"
                name="spotPerson_1_Mo"
              />
            </div>
            <div className="md:ml-24 ml-10">
              <ContactInput label="નામ:" name="spotPerson_2" />
              <ContactInput
                label="મોબાઇલ નંબર:"
                type="text"
                name="spotPerson_2_Mo"
              />
            </div>
            <div className="flex justify-center">
              <div className="mt-2">
                <SubmitBtn name="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
