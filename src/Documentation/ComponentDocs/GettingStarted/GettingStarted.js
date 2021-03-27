import Gist from "react-gist";
export const GettingStarted = () => {
  return (
    <>
      <h1>Getting Started</h1>
      <h3>Installation</h3>
      <p>
        Run the following command to install <code>forkUI library</code> to your
        React project Directory.
      </p>
      <div className="usage">npm i forkui-lib</div>
      <h3>How to use?</h3>
      <p>
        The example below shows how you can import any component from the
        library and use directly in your code.
      </p>
      <Gist id="c5153f776512008290c8756ea066f40c" />
    </>
  );
};
