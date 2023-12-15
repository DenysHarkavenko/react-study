import { MyInput } from "./UI/input/MyInput"
import { MySelect } from "./UI/select/MySelect"

export function PostFilter({filter, setFilter}){
    return(
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue='Sorting by'
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
      </div>
    )
}