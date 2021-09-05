import React, { FC } from "react";
import { checkGenerateTypes, generateTypes } from "../lib/generateTypes";
import { Formik, Form, Field } from "formik";
import { serialize } from "@jscad/stl-serializer";
import { keychain } from "../lib/keychain";

type MenuProps = {
	useFilter: [
		generateTypes,
		React.Dispatch<React.SetStateAction<generateTypes>>
	];
};

const Menu: FC<MenuProps> = ({ useFilter }) => {
	const [filter, setFilter] = useFilter;

	const initialValues: generateTypes = { ...filter };

	const updateData = (data: generateTypes) => {
		if (checkGenerateTypes(data)) setFilter(data);
	};

	const download = (data: generateTypes) => {
		const fileName = `keyring-${data.myText.match(/[A-Za-z0-9]/g).join("")}.stl`
		const rawData = serialize({ binary: true }, keychain(data));
		const blob = new Blob(rawData);
		const blobUrl = URL.createObjectURL(blob);
		const tempLink = document.createElement("a");
		tempLink.href = blobUrl;
		tempLink.setAttribute("download", fileName);
		tempLink.click();
	};

	return (
		<div className="menu">
			<Formik
				initialValues={initialValues}
				validateOnChange={true}
				validate={updateData}
				onSubmit={download}
			>
				<Form>
					<div className="menu-item">
						<label htmlFor="outer">
							<Field type="checkbox" name="outer" />
							Outer text
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="width">
							Width
							<Field type="number" min="30" max="200" name="width" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="height">
							Height
							<Field type="number" min="10" max="50" name="height" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="depth">
							Depth
							<Field type="number" min="0.1" max="10" step="0.1" name="depth" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="holeDiameter">
							Hole diameter
							<Field type="number" min="0.1" max="10" step="0.1" name="holeDiameter" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="myText">
							Text
							<Field type="text" name="myText" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textDepth">
							Text Depth
							<Field type="number" min="0.1" max="10" step="0.1" name="textDepth" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textWidth">
							Text Width
							<Field type="number" min="1" max="10" step="1" name="textWidth" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textScale">
							Text Scale
							<Field type="number" min="0.1" max="10" step="0.05" name="textScale" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetX">
							Text Offset X
							<Field type="number" min="-10" max="50" step="1" name="textOffsetX" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetY">
							Text Offset Y
							<Field type="number" min="-10" max="50" step="1" name="textOffsetY" />
						</label>
						<br />
					</div>
					<button type="submit">Download STL</button>
				</Form>
			</Formik>
		</div>
	);
};

export default Menu;
