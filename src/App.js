import "./App.css";
import Tags from "./Tags";

let tags = ["boomdotdev", "task", "tags", "react"];

function App() {
  return (
    <div className="App">
      <Tags props={tags}></Tags>
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
