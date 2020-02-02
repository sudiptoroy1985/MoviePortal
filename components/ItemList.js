import Item from "../components/Item";

export default ({ movies }) => (
    movies.map(p => <Item movie={p} key={p.Name}/>)
)