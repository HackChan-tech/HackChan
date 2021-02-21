import React from "react";
import { useForm } from "react-hook-form";

export default function NewThread() {
  const { register, handleSubmit, watch, errors } = useForm();
  //replace with fetch call
  const onSubmit = data => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Title</label>
      <input name="title" ref={register({
        required: true
      })} />
      {errors.title && <p>Please provide a title</p>}
      <label>Body</label>
      <textarea name="body" ref={register({
        required: true
      })} />
      {errors.body && <p>Please provide meaningful input</p>}
      <input type="submit"/>
    </form>
  );
}
