import React, { FC, useState } from "react";
import { generateTypes } from "../lib/generateTypes";

type MenuProps = {
	useFilter: [
		generateTypes,
		React.Dispatch<React.SetStateAction<generateTypes>>
	]
}

const Menu: FC<MenuProps> = ({useFilter}) => {
	const [filter, setFilter] = useFilter;
	
	
	const setInnerText = ({ target }: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		//@ts-ignore
		const state: boolean = target.checked;
		setFilter({...filter, inner: !state})
	}

	return (
		<div className="menu">
			<input type="checkbox" id="isInner" name="isInner" onClick={setInnerText}/>
			<label htmlFor="isInner">Inner text</label>

			<div className="slidecontainer">
				<input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
			</div>
		</div>
	);
}

export default Menu;
