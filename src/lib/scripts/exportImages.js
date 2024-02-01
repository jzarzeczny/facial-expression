import * as fs from 'fs';

const folderPath = '../experimentAssets';
const outputFilePath = '../experimentAssets/index.mjs';

function generateImportExportStatements(folderPath) {
	const files = fs.readdirSync(folderPath);

	if (files.length === 0) {
		console.log('No images found in the specified folder.');
		return;
	}

	let importStatements = '';
	let exportStatements = 'export {';

	files.forEach((file, index) => {
		const importName = `image${index + 1}`;
		importStatements += `import ${importName} from "./${file}";\n`;
		exportStatements += ` ${importName},`;
	});

	exportStatements = exportStatements.slice(0, -1) + '};\n';

	return { importStatements, exportStatements };
}

const { importStatements, exportStatements } = generateImportExportStatements(folderPath);

if (importStatements && exportStatements) {
	console.log(importStatements);
	console.log(exportStatements);

	fs.writeFileSync(outputFilePath, importStatements + '\n' + exportStatements, 'utf-8');
}
