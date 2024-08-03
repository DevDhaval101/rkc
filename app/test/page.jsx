export default function TestPage() {
  async function submitHandler(formData) {
    "use server";
    console.log(formData);
  }
  return (
    <form action={submitHandler}>
      <div>
        <div>
          <label htmlFor="bina">Hello</label>
        </div>
        <input type="text" name="hello" />
        <input type="text" name="hello" />
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
