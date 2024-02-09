import { _mock } from "./_mock";
import { _tags } from "./assets";

// ----------------------------------------------------------------------

const TITLE = [
  "Nucleoid Project",
  "Technology Nixon",
  "Turn Key Smart",
  "Digital Shose",
  "Action Car",
  "The Zone UI",
  "Minimal UI",
  "Network Firefox",
];

const CONTENT = `
<h3>Declarative (Logic) Runtime Environment</h3>
<br/>
<br/>
<h4>Project Brief</h4>
<br/>
<p>
Nucleoid is D(L)RE, which is  type of Symbolic AI used for reasoning engine for Neuro-Symbolic AI.
The runtime that tracks given statements in JavaScript and creates relationships between variables, objects, and functions etc. in the graph. So, as writing just like any other codes in Node.js, the runtime translates your business logic to fully working application by managing the JS state as well as storing in the built-in data store, so that your application doesn't require external database or anything else.
</p>

<br/>
<br/>

<center>
<img width="500" src="https://raw.githubusercontent.com/NucleoidJS/Nucleoid/main/.github/media/graph.gif"/>
</center>

<br/>
<br/>

<h4>The Integration of Learning and Reasoning</h4>
<br/>
<p>Neuro-Symbolic AI is an emerging field that aims to unify the strengths of neural networks and symbolic AI to create systems that can both learn from data and reason with the learned information. This hybrid approach seeks to overcome the limitations of each individual method by leveraging their complementary capabilities.</p>
<br/>
<br/>
<h5>Neural Networks: The Learning Component</h5>
<br/>
<p>Neural networks in Neuro-Symbolic AI are adept at learning patterns, relationships, and features from large datasets. These networks excel in tasks that involve classification, prediction, and pattern recognition, making them invaluable for processing unstructured data, such as images, text, and audio. Neural networks, through their learning capabilities, can generalize from examples to understand complex data structures and nuances in the data.</p>
<br/>
<br/>
<h5>Symbolic AI: The Reasoning Component</h5>
<br/>
<p>The symbolic component of Neuro-Symbolic AI focuses on logic, rules, and symbolic representations of knowledge. Unlike neural networks that learn from data, symbolic AI uses predefined rules and knowledge bases to perform reasoning, make inferences, and understand relationships between entities. This aspect of AI is transparent, interpretable, and capable of explaining its decisions and reasoning processes in a way that humans can understand.</p>
<br/>
<br/>
<h5>Declarative Logic in Symbolic Reasoning</h5>
<br/>
<p>Declarative logic is a subset of declarative programming, a style of building programs that expresses the logic of a computation without describing its control flow. In declarative logic, you state the facts and rules that define the problem domain. The runtime environment or the system itself figures out how to satisfy those conditions or how to apply those rules to reach a conclusion. This contrasts with imperative programming, where the developer writes code that describes the exact steps to achieve a goal.</p>
<br/>
<p>Symbolic reasoning refers to the process of using symbols to represent problems and applying logical rules to manipulate these symbols and derive conclusions or solutions. In AI and computer science, it involves using symbolic representations for entities and actions, enabling the system to perform logical inferences, decision making, and problem-solving based on the rules and knowledge encoded in the symbols.</p>
<br/>
<p>By integrating Nucleoid into Neuro-Symbolic AI, the system benefits from enhanced interpretability and reliability. The declarative logic and rules defined in Nucleoid provide clear explanations for the AI's decisions, making it easier for users to understand and trust the system's outputs. Furthermore, the explicit reasoning capabilities help ensure that decisions are made based on logical principles, adding a layer of reliability and consistency to the AI's behavior.</p>
`;

export const _caseStudies = TITLE.map((_, index) => {
  const galleryImgs = [
    _mock.image.marketing(0),
    _mock.image.marketing(1),
    _mock.image.marketing(2),
    _mock.image.marketing(3),
    _mock.image.marketing(4),
    _mock.image.marketing(5),
  ];

  return {
    id: _mock.id(index),
    content: CONTENT,
    title: TITLE[index],
    category: _tags[index],
    createdAt: _mock.time(index),
    website: "https://github.com/NucleoidJS/Nucleoid",
    description: _mock.description(index),
    heroUrl: "/assets/images/marketing/marketing_post_hero.jpg",
    coverUrl: `/assets/images/marketing/marketing_${index + 1}.jpg`,
    how_we_work:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    results:
      "Nullam tincidunt adipiscing enim. Mauris sollicitudin fermentum libero. Pellentesque auctor neque nec urna. Sed fringi",
    galleryImgs,
  };
});
