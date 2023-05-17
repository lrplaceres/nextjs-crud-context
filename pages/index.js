import Layout from "@/components/Layout";
import { useTasks } from "@/context/taskContext";
import {VscTrash} from "react-icons/vsc"

const Home = () => {
  const { tasks } = useTasks();

  return (
    <Layout>
      <div className="flex justify-center">
        {tasks.length === 0 ? (
          <h2>There are no Task</h2>
        ) : (
          <div className="w-7/12">
            {tasks.map((task, i) => (
              <div
                key={i}
                className="bg-gray-700 hover:bg-gray-600 cursor-pointer px-5 py-5 m-2 flex justify-start"
              >
                <span className="text-5xl mr-5 items-center">{i}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h1 className="font-bold">{task.title}</h1>
                    <button className="bg-red-700 hover:bg-red-600 px-3 py-1 rounded-sm inline-flex items-center" >
                      <VscTrash className="mr-2"/>
                      Delete</button>
                  </div>
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
