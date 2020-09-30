const tsickle = require('tsickle');
const ts = require('typescript');
const path = require('path');
const fs = require('fs');

const options = {
    target: ts.ScriptTarget.ES2016,
    moduleResolution: ts.ModuleResolutionKind.NodeJs
};

const compilerHost = ts.createCompilerHost(options);

const program = ts.createProgram([
    path.join(__dirname, "types/types.d.ts"),
    path.join(__dirname, 'importing_types.d.ts')
], options, compilerHost);

const tsickleHost = {
    shouldSkipTsickleProcessing(fileName) {
        return !fileName.endsWith("types.d.ts");
    },
    pathToModuleName(context, fileName) {
        return tsickle.pathToModuleName(__dirname, context, fileName)
    },
    es5Mode: true,
    googmodule: true,
    transformDecorators: true,
    transformTypesToClosure: true,
    typeBlackListPaths: new Set(),
    untyped: false,
    logWarning: (warning) => console.error(ts.formatDiagnostics([warning], compilerHost)),
    options,
    moduleResolutionHost: compilerHost,
};

const writeFile = (filePath, contents) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, contents, { encoding: 'utf-8' });
}

const result = tsickle.emit(program, tsickleHost, writeFile);

fs.writeFileSync('externs.js', tsickle.getGeneratedExterns(result.externs, __dirname));
