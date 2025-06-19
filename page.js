import getAllUsers from "@/lib/getAllUsers";
import getUser from "@/lib/getUser";

export default async function User({ params }) {
  const user = await getUser(params.userid);
  console.log(user);

  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}
export async function generateStaticParams(){
  const usersData= getAllUsers();
  const users = await usersData;
  return users.map(user => (
    {userId : user.id.toString()}
  ))
}
