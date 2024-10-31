"use client";

import MultiStep from "react-multistep";
interface IStep {}
interface IStep {}
// TODO sdklfaçslkdfasdfasd

const componentStepData: IStepComponent[] = [
  { title: "S 1", component: StepOne },
  { title: "S 2", component: StepTwo },
];

export default function Step({}: IStep) {
  return (
    <div className="min-h-screen bg-zinc-300 grid place-items-center">
      <div className="w-full min-h-[35rem] max-w-5xl px-6 py-12 bg-white rounded-lg shadow-lg flex flex-col justify-between gap-y-4">
        <MultiStepForm stepsComponent={componentStepData} />
      </div>
    </div>
  );
}

interface IStepComponent {
  title: string;
  component: React.ComponentType<{ title: string }>;
}
interface IMultiStepForm {
  stepsComponent: IStepComponent[];
}
// TODO ,asmn.,man.d,mna,mdnf.asm,dnf,.as
export function MultiStepForm({ stepsComponent }: IMultiStepForm) {
  return (
    <MultiStep
      activeStep={0}
      prevButton={{
        title: "<- Voltar",
        style: {
          background: "transparent",
          color: "#222",
          cursor: "pointer",
          padding: 6,
          borderRadius: 8,
          marginRight: 8,
        },
      }}
      nextButton={{
        title: "Próximo Passo ->",
        style: {
          background: "#33c3f0",
          color: "#fff",
          padding: 6,
          borderRadius: 8,
        },
      }}
     stepCustomStyle={{
        background: "yellow"
     }}
    >
      {stepsComponent?.map((Component, index) => (
        <Component.component key={index} title={Component.title} />
      ))}
    </MultiStep>
  );
}

function StepOne() {
  return (
    <div className="text-green-600 h-full bg-red-500 " title="Step 1">
      <h1>Step 1</h1> 
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, sequi.
        Error, fuga repellat. Adipisci, optio officiis fugit reprehenderit,
        animi voluptatibus qui laborum mollitia, pariatur blanditiis a facilis
        nobis quas nesciunt?
      </p>
      <p>
        PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
      </p>
    </div>
  );
}

function StepTwo() {
  return (
    <div className="text-red-800 bg-blue-500" title="Step 2">
      <h1>Step 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum velit ab
        ipsum impedit dicta nihil, vitae doloremque sint sunt repudiandae
        dolorem consectetur optio mollitia cum error obcaecati nobis et animi.
      </p>
    </div>
  );
}
