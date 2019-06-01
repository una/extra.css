const fs = require("fs");
const path = require("path");
const basePath = "./lib/";

// Read all the files in the base directory
const dirs = fs.readdirSync(basePath);
dirs
  // Filter out non-directories
  .filter(file => fs.lstatSync(path.join(basePath, file)).isDirectory())
  // For each directory read properties.js and worklet.js
  .forEach(dir => {
    const properties = fs.readFileSync(
      path.join(basePath, dir, "properties.js")
    );
    const worklet = fs.readFileSync(path.join(basePath, dir, "worklet.js"));

    // Write a script file in base
    fs.writeFileSync(
      `./lib/${dir}.js`,
      `      
      ${properties.toString()}

      const worklet = ${JSON.stringify(worklet.toString())}
      const workletBlob = URL.createObjectURL(new Blob([worklet], { type: 'application/javascript' }))
      window.CSS.paintWorklet.addModule(workletBlob)
    `
    );
  });
