import React, { FC, Dispatch, SetStateAction } from "react";
import { checkGenerateTypes, generateTypes } from "../lib/generateTypes";
import { Formik, Form, Field } from "formik";
import { serialize } from "@jscad/stl-serializer";
import { keychain } from "../lib/keychain";

type MenuProps = {
	useFilter: [generateTypes, Dispatch<SetStateAction<generateTypes>>];
};

const Menu: FC<MenuProps> = ({ useFilter }) => {
	const [filter, setFilter] = useFilter;

	const initialValues: generateTypes = { ...filter };

	const updateData = (data: generateTypes) => {
		if (checkGenerateTypes(data)) setFilter(data);
	};

	const download = (data: generateTypes) => {
		const fileName = `keyring-${data.myText.match(/[A-Za-z0-9]/g).join("")}.stl`;
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
							<Field type="checkbox" name="outer" aria-label="Outer Text" />
							Outer text
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="width">
							Width (mm)
							<Field
								type="number"
								min="30"
								max="200"
								name="width"
								aria-label="Width"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="height">
							Height (mm)
							<Field
								type="number"
								min="10"
								max="50"
								name="height"
								aria-label="Height"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="depth">
							Depth (mm)
							<Field
								type="number"
								min="0.1"
								max="10"
								step="0.1"
								name="depth"
								aria-label="Depth"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="holeDiameter">
							Hole Diameter (mm)
							<Field
								type="number"
								min="0.1"
								max="10"
								step="0.1"
								name="holeDiameter"
								aria-label="Hole Diameter"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="myText">
							My Text
							<Field type="text" name="myText" aria-label="My Text" />
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textDepth">
							Text Depth (mm)
							<Field
								type="number"
								min="0.1"
								max="10"
								step="0.1"
								name="textDepth"
								aria-label="Text Depth"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textWidth">
							Text Width (mm)
							<Field
								type="number"
								min="1"
								max="10"
								step="1"
								name="textWidth"
								aria-label="Text Width"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textScale">
							Text Scale (%)
							<Field
								type="number"
								min="0.1"
								max="10"
								step="0.05"
								name="textScale"
								aria-label="Text Scale"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetX">
							Text Offset X (mm)
							<Field
								type="number"
								min="-10"
								max="50"
								step="1"
								name="textOffsetX"
								aria-label="Text Offset X"
							/>
						</label>
						<br />
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetY">
							Text Offset Y (mm)
							<Field
								type="number"
								min="-10"
								max="50"
								step="1"
								name="textOffsetY"
								aria-label="Text Offset Y"
							/>
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
