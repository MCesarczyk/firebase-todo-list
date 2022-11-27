import { useQueryParameter, useReplaceQueryParameter } from "app/queryParameters";
import searchQueryParamName from "app/searchQueryParamName";
import { Input } from "./Input";
import styled from "styled-components";

export const Search = () => {
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    // const onInputChange = ({ target }: any) => {
    //     replaceQueryParameter({
    //         key: searchQueryParamName,
    //         value: target.value.trim() !== "" ? target.value : undefined,
    //     });
    // };

    return (
        <Input
            placeholder="Search"
            value={query || ""}
            onChange={() => { }}
        // onChange={onInputChange}
        />
    )
};
