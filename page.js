// app/users/[user]/hobbies/[hobbie]/page.js

export default function Page({ params }) {
  return (
    <div>
      <h1>User ID: {params.user}</h1>
      <h1>Hobby: {params.hobbie}</h1>
    </div>
  );
}
