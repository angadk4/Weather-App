import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import { geoapiUrl, geoapiOptions } from "../../api";

const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) => {
        return fetch(
            `${geoapiUrl}/cities?minPopulation=100000&namePrefix=${inputValue}`, 
            geoapiOptions
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longutude}`,
                            label: `${city.name} ${city.countryCode}`,
                        };
                    }),
                };
            })
            .catch((err) => console.error)
    };

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}

export default Search;

