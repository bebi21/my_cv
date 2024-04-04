import { TypeAnimation } from "react-type-animation";

const ExampleComponent = () => {
  return (
    <TypeAnimation
      sequence={[
        "Xin chào mọi người", // Types 'One'
        1000, // Waits 1s
        "Tôi  tên Là Lộc", // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        "Tôi  là 1 freser font-end ", // Types 'Three' without deleting 'Two'
        () => {
          console.log("Sequence completed");
        },
      ]}
      wrapper='span'
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: "2em", display: "inline-block" }}
    />
  );
};

export default ExampleComponent;
