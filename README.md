<h1>Todo application</h1>
<hr><p>This app can help you in creating and checking things that needs to be done, so you don't forget it</p><h2>Technologies Used</h2>
<hr><ul>
<li>HTML</li>
</ul><ul>
<li>CSS</li>
</ul><ul>
<li>JavaScript</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>NodeJS</li>
</ul><ul>
<li>TypeScript</li>
<h2>Screenshots</h2>
<img src="https://prnt.sc/AIb2eW4Om_pU" alt="Screenshot" width="800" />
</ul><h2>Setup</h2>
<hr><p>To set up the project you can clone backend from this repo: https://github.com/BogdanGlazkov/adev-todo-backend. Then create .env file (copy from .env.example) and add your MONGO_DB url (which includes your Mongo login and password)</p><h5>Steps</h5><ul>
<li>npm i</li>
</ul><ul>
<li>npm start</li>
</ul><ul>
<li>use the app on https://comforting-sprinkles-bb9604.netlify.app/todos</li>
</ul><h2>Usage</h2>
<hr><p>You can add todo, change it (fulfill) and delete it. But you need to register and login first ;)</p>
<h5>Code Examples</h5><ul>
<li>The project was created using React and Vite. Here is a code example from App component</li>
</ul><p><code>import { useState, useEffect } from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import LoginPage from "./pages/LoginPage"; 
import RegistrationPage from "./pages/RegistrationPage"; 
import TodoPage from "./pages/TodoPage";

const App = () =&gt; { const [isAuth, setIsAuth] = useState(false);  
const token = localStorage.getItem("token");

useEffect(() =&gt; { setIsAuth(!!token); }, [token]);

return ( &lt;BrowserRouter&gt; &lt;Routes&gt; &lt;Route path="/login" element={&lt;LoginPage /&gt;} /&gt; &lt;Route path="/register" element={&lt;RegistrationPage /&gt;} /&gt; &lt;Route path="/todos" element={&lt;TodoPage /&gt;} /&gt; &lt;Route path="\*" element={&lt;LoginPage /&gt;} /&gt; &lt;/Routes&gt; &lt;/BrowserRouter&gt; ); };

export default App;</code></p>

<h2>Project Status</h2>
<hr><p>Completed</p><h2>Features that can be added</h2>
<hr><ul>
<li>Add personal routing</li>
</ul><ul>
<li>Add private and public routes</li>
</ul><ul>
<li>Improve design</li>
</ul><h2>Contact</h2>
<hr><p><span style="margin-right: 30px;"></span><a href="https://www.linkedin.com/in/bogdan-glazkov/"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" style="width: 10%;"></a><span style="margin-right: 30px;"></span><a href="https://github.com/BogdanGlazkov"><img target="_blank" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" style="width: 10%;"></a></p>
