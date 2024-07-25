import reactimg from './reactd.svg';
import reduximg from './redux.png';
import appwriteimg from './appwrite.png';
import graphqlimg from './graphQl.jpg';
import apolloimg from './apollo.png';
import expressimg from './expressjs.png';
import tailwindimg from './tailwind.png';
import shadcnimg from './shadcn.png';


const techStack = [
  { name: 'React', logo: reactimg },
  { name: 'Redux', logo: reduximg },
  { name: 'Appwrite', logo: appwriteimg },
  { name: 'GraphQL', logo: graphqlimg },
  { name: 'Apollo', logo: apolloimg },
  { name: 'Express', logo: expressimg },
  { name: 'Tailwind', logo: tailwindimg },
  { name: 'Shadcn', logo: shadcnimg }
]

const UsedTechStack = () => {
  return (
    <div className=" w-fit flex flex-wrap justify-center p-6 rounded-lg shadow-inner shadow-foreground mx-auto my-8">
      <h2 className=" text-ground w-full text-3xl font-bold mb-4 text-center">Tech Stack</h2>
      <div className={`grid grid-cols-2 sm:grid-cols-${techStack.length}`}>
      {techStack.map((tech, index) => (
        <div key={index} className=" flex flex-col items-center m-4 transform transition-transform duration-300 hover:scale-110">
          <img src={tech.logo} alt={tech.name} className="h-16 w-16 object-contain" />
          <span className="text-lg font-medium">{tech.name}</span>
        </div>
      ))}
      </div>
    </div>
  );
}

export default UsedTechStack;
