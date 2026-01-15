import Badge from "./Badge";

export default function Task({ data }) {
    const isCompleted = data.completed || false;
    return (
        <div className="p-3 bg-dim border-1 border-border">
            <div className="flex justify-between items-start gap-2">
                <p className="max-w-[250px]">{data.title}</p>
                {
                    isCompleted ?
                        <Badge type="success">Completed</Badge>
                        :
                        <Badge type="error">Not Completed</Badge>
                }
            </div>
        </div>
    );
}