import ResumeTemp from "./templatessection/ResumeTemp";
import TemplateRenderer from "./templatessection/WebsiteTemp";
const App: React.FC = () => {
  return (
    <div>
      <h1>Websites</h1>
      <TemplateRenderer />
      <h1>Resume</h1>
      <ResumeTemp />
    </div>
  );
};

export default App;