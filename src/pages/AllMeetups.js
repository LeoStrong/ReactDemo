import MeetupList from "../components/meetup/MeetupList";


const DUMMY_DATA = [
    {
        id: "m1",
        title: 'This is a first meetup',
        image:'https://v.fastcdn.co/u/f91f856b/60142610-0-slide-1.jpg',
        address: 'Sydney, AU',
        description: `Whether you’re interested in real estate and cryptocurrency or entrepreneurship and business development, you can share your expertise or simply grow on Meetup.`,
    },
    {
        id: "m2",
        title: 'This is the second meetup',
        image:'https://v.fastcdn.co/u/f91f856b/60142600-0-slide-3.jpg',
        address: 'Adelaide, AU',
        description: `Yoga, meditation, outdoor activities, fitness, and sports groups are always in high demand. Create a group and share what you know.`,
    },
    {
        id: "m3",
        title: 'This is the third meetup',
        image:'https://v.fastcdn.co/u/f91f856b/60141425-0-slide-4.jpg',
        address: 'Sydney, AU',
        description: `Find new friends at any age. Start a group for happy hours, singles, support, dining out, and more!`,
    },
]

function AllMeetupsPage() {
    return (
        <section>
            <h1>All Meetups</h1>
            <ul>
                <MeetupList meetups={DUMMY_DATA} />
            </ul>
        </section>
    );
}

export default AllMeetupsPage;


