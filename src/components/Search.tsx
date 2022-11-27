import { useQueryParameter, useReplaceQueryParameter } from "app/queryParameters";
import { SEARCH_QUERY_PARAM_NAME } from "app/constants";
import { Input } from "./Input";

export const Search = () => {
    const query = useQueryParameter(SEARCH_QUERY_PARAM_NAME);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }: any) => {
        replaceQueryParameter({
            key: SEARCH_QUERY_PARAM_NAME,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <Input
            placeholder="Search"
            value={query || ""}
            onChange={onInputChange}
        />
    )
};
