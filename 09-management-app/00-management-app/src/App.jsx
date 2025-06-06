import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined, //undefined => no proj. selected nor adding, null => adding projects, some-id => selected proj. id
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    if (task.trim().length === 0) {
      console.log("ooops empty");
      return;
    }

    setProjectState((prev) => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        id: taskId,
        projectId: prev.selectedProjectId,
      };
      return {
        ...prev,
        tasks: [newTask, ...prev.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  }

  function handleSelectProject(id) {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: id, // indicates that provided id project is selectd
    }));
  }

  function handleStartAddProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: null, // indicates that new project is being added
    }));
  }

  function handleCancelAddProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined, // indicates that no project neither adding new nor showing any project
    }));
  }

  function handleAddNewProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId,
    };
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: [...prev.projects, newProject],
    }));
  }

  function handleDeleteProject() {
    setProjectState((prev) => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(
        (project) => project.id !== prev.selectedProjectId
      ),
    }));
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks.filter(
        (task) => task.projectId === selectedProject.id
      )}
      // tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddNewProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
