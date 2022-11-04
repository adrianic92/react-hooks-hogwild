import React, {useState} from "react";
import Nav from "./Nav";
import HogTiles from "./HogTiles"
import Filter from "./Filter";
import HogSorter from "./HogSorter";
import hogs from "../porkers_data";

function App() {
	const [greasy, setGreasy] = useState(false)
	const [sort, setSort] = useState("name")
	
	function makeItGreasy() {
		setGreasy(greasy => !greasy)
	}
	
	function sorter() {
		if (sort === "name") {
			setSort("weight")
		} else {
			setSort("name")
		}
	}

	const filteredHogs = hogs.filter(filHog => {
		if (greasy) {
			return filHog.greased === greasy
		}
		else {
			return filHog
		}
	}).sort((a, b) => {
		if (sort === "name" ) {
			return a.name < b.name ? -1 : 1
		} else {
			return a.weight - b.weight
		}
	})

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<Filter makeItGreasy={makeItGreasy} greasy={greasy}/>
			</div>
			<div className="sixteen wide column centered">
				<HogSorter sorter={sorter} />
			</div>
			<div className="sixteen wide column centered">
				<HogTiles hogs={filteredHogs} />
			</div>
		</div>
	);
}

export default App;
