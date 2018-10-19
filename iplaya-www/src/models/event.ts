interface IEventOccurence {
    start_time: string,
    end_time: string,
}

export default interface IEvent {
    description: string,
    title: string,
    _id: string,
    event_id: number,
    uid: string,
    event_type: {
        id: number,
        label: string,
        abbr: string,
    },
    print_description: string,
    slug: string,
    hosted_by_camp: string,
    url: string,
    occurence_set: IEventOccurence[],
    contact: string,
    host_camp: object
}
