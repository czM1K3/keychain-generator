import React, { FC, useState } from "react";
import { generateTypes } from "../lib/generateTypes";
import {
	Formik,
	FormikHelpers,
	FormikProps,
	Form,
	Field,
	FieldProps,
  } from 'formik';

type MenuProps = {
	useFilter: [
		generateTypes,
		React.Dispatch<React.SetStateAction<generateTypes>>
	]
}

const Menu: FC<MenuProps> = ({useFilter}) => {
	const [filter, setFilter] = useFilter;

	const initialValues: generateTypes = { ...filter };
	
	const updateData = (data: generateTypes) => {
		setFilter(data);
		// console.log(data);
	}
	
	return (
		<div className="menu">
			<Formik
			initialValues={initialValues}
			validateOnChange={true}
			validate={updateData}
			onSubmit={(values) => console.log(values)}>
				<Form>
					<div className="menu-item">
						<label htmlFor="outer">	
							<Field type="checkbox" name="outer" />
							Outer text
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="width">
						Width
							<Field type="number" min="30" max="200" name="width" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="height">
						Height
							<Field type="number" min="10" max="50" name="height" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="depth">
						Depth
							<Field type="number" min="0.1" max="10" step="0.1" name="depth" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="myText">
						Text
							<Field type="text" name="myText" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="textDepth">
						Text Depth
							<Field type="number" min="0.1" max="10" step="0.1" name="textDepth" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="textWidth">
						Text Width
							<Field type="number" min="1" max="10" step="1" name="textWidth" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="textScale">
						Text Scale
							<Field type="number" min="0.1" max="10" step="0.05" name="textScale" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetX">
						Text Offset X
							<Field type="number" min="-1" max="50" step="1" name="textOffsetX" />
						</label><br/>
					</div>

					<div className="menu-item">
						<label htmlFor="textOffsetY">
						Text Offset Y
							<Field type="number" min="-10" max="50" step="1" name="textOffsetY" />
						</label><br/>
					</div>
				</Form>
			</Formik>
		</div>
	);
}

export default Menu;
