import Form from "./Form";
import StudentList from "./StudentList";

const Dashboard = () => {
  return (
    <div className="flex h-full px-5 py-5 space-x-3 w-full relative">
      <StudentList />
      <Form />
    </div>
  );
};

export default Dashboard;
