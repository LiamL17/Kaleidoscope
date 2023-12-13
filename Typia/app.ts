import typia, { tags } from "typia";

interface IMember {
    id: string & tags.Format<"uuid">;
    email: string & tags.Format<"email">;
    age: number 
        & tags.Type<"uint32"> 
        & tags.ExclusiveMinimum<19> 
        & tags.Maximum<100>;
}

const member: IMember = typia.random<IMember>();
console.log(member);

const member2: IMember = {
    id: '',
    age: 20,
    email: ""
}

typia.assert<IMember>(member2)