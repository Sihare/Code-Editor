export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    cpp: "10.2.0",
    java: "15.0.2",
    python: "3.10.0",
    typescript: "5.0.3",
}

export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Javascript");\n`,
    cpp: `#include <iostream> \n#include <string> \n\nvoid greet(const std::string& name) {\n\tstd::cout << "Hello, " << name << "!" << std::endl;\n} \n\nint main() {\n\tgreet("C++");\n\treturn 0;\n}`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java");\n\t}\n}\n`,
    python: `def greet(name):\n\tprint("Hello, "+name+"!")\n\ngreet("Python")\n`,
    typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "TypeScript" });\n`,
}

export const baseUrl = 'https://emkc.org/api/v2/piston/execute'