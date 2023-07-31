# Renaiss Frontend Test

You are going to need -> [Figma](https://www.figma.com/file/dTbo3PXPG1rWqeKwp6QZky/Prueba-T%C3%A9cnica?type=design&node-id=0-1&t=3hR3HQvhObuQq7n8-0)

The following chat should be developed with integration to the [Open AI API](https://platform.openai.com/docs/introduction).

The development can be done using the React framework or library that the candidate prefers (NextJS, Vite, etc). The use of Typescript is mandatory.

The application must have a specific section to configure the system indicator for Open AI and the model must respond according to the configuration of said indicator.

In addition to the section mentioned above, there should be an area for the chat history. Each history should have as its title the first message that is sent through the chat. Clicking on such a history should retrieve all the messages it contains.

### Chat restrictions:

- A maximum of 1000 tokens is allowed. As the user types their message, it will show how many tokens they have left.
- You need to select a search or create a new one to start using the chat.
- The chat must adapt the content sent and structure it accordingly. For example, if the chat sends me an image or a piece of code, the chat must be prepared to display that content in the correct way.

### Topics to evaluate:

- Converting the Figma layout to code.
- Responsive design.
- Status management.
- Asynchronous programming.
- Implementation of SOLID principles.
- Architecture and structure of the project.

The project must be deployed on the platform such as [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
