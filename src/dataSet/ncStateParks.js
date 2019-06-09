const ncStateParks = [
    {
        name:"Carolina Beach State Park", 
        lngLat: [-77.91714439188098, 34.04206599966817],
        address:"1010 State Park Road, Carolina Beach, NC 28428",
        hours:"Mon-Sun 7AM-6PM",
        website:"https://www.ncparks.gov/carolina-beach-state-park",
        zoomLevel: 7
    },
    {
        name: "Carvers Creek State Park",
        lngLat: [-78.878056, 35.185778],
        address: "2505 Long Valley Road, Spring Lake, NC 28390",
        hours: "Mon-Sun 8AM-9PM",
        website: "https://www.ncparks.gov/carvers-creek-state-park",
        zoomLevel: 5
    },
    {
        name: "Chimney Rock State Park",
        lngLat: [-82.25026, 35.432799],
        address: "743 Chimney Rock Park Road, Chimney Rock, NC 28720",
        hours: "Unknown",
        website: "https://www.ncparks.gov/chimney-rock-state-park",
        zoomLevel: 5
    },
    {
        name: "Cliffs of the Neuse State Park",
        lngLat: [-77.893200, 35.235400],
        address: "240 Park Entrance Road, Seven Springs, NC 28578",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/cliffs-of-the-neuse-state-park",
        zoomLevel: 6
    },
    {
        name: "Crowders Mountain State Park",
        lngLat: [-81.293555, 35.213316],
        address: "522 Park Office Lane, Kings Mountain, NC 28086",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/crowders-mountain-state-park",
        zoomLevel: 7

    },
    {
        name: "Dismal Swamp State Park",
        lngLat: [-76.355100, 36.505700],
        address: "2294 U.S. 17 N., South Mills, NC 27976",
        hours: "Mon-Sun 8AM-6PM",
        website: "https://www.ncparks.gov/dismal-swamp-state-park",
        zoomLevel: 4

    },
    {
        name: "Elk Knob State Park",
        lngLat: [-81.690640, 36.332586],
        address: "5564 Meat Camp Road, Todd, NC 28684",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/elk-knob-state-park",
        zoomLevel:7
    },
    {
        name: "Eno River State Park",
        lngLat: [-79.005000, 36.078300],
        address: "6101 Cole Mill Road, Durham, NC 27705",
        hours: "Mon-Sun 7AM-8:30PM",
        website: "https://www.ncparks.gov/eno-river-state-park",
        zoomLevel: 8
    },
    {
        name: "Falls Lake State Recreation Area",
        lngLat: [-79.016569, 35.735554],
        address: "13304 Creedmoor Road, Wake Forest, NC 27587",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/falls-lake-state-recreation-area",
        zoomLevel: 7
    },
    {
        name: "Fort Fisher State Recreation Area",
        lngLat: [-77.929000, 33.953400],
        address: "1000 Loggerhead Road,Kure Beach, NC 28449",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/fort-fisher-state-recreation-area",
        zoomLevel: 5
    },
    {
        name: "Fort Macon State Park",
        lngLat: [-76.678340, 34.697952],
        address: "2303 East Fort Macon Road, Atlantic Beach, NC 28512",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/fort-macon-state-park",
        zoomLevel: 7
    },
    {
        name: "Goose Creek State Park",
        lngLat: [-76.901410, 35.481853],
        address: "2190 Camp Leach Road, Washington, NC 27889",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/goose-creek-state-park",
        zoomLevel: 3
    },
    {
        name: "Gorges State Park",
        lngLat: [-82.951000, 35.096000],
        address: "976 Grassy Ridge Road, Sapphire, NC 28774",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/gorges-state-park",
        zoomLevel:0 //hard
    },
    {
        name: "Grandfather Mountain State Park",
        lngLat: [-81.811140, 36.111200],
        address: "9872 N.C. 105 S., Suite #6, Banner Elk, NC 28604",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/grandfather-mountain-state-park",
        zoomLevel: 7
    },
    {
        name: "Hammocks Beach State Park",
        lngLat: [-77.1429, 34.671],
        address: "1572 Hammock Beach Road, Swansboro, NC 28584",
        hours: "Mon-Sun 8AM-7PM",
        website: "https://www.ncparks.gov/hammocks-beach-state-park",
        zoomLevel: 3.2

    },
    {
        name: "Hanging Rock State Park",
        lngLat: [-80.254120, 36.411906],
        address: "1790 Hanging Rock Park Road, Danbury, NC 27016",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/hanging-rock-state-park",
        zoomLevel: 6
    },
    {
        name: "Haw River State Park",
        lngLat: [-79.756390, 36.250859],
        address: "339 Conference Center Drive, Browns Summit, NC 27214",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/haw-river-state-park",
        zoomLevel: 6
    },
    {
        name: "Jockey's Ridge State Park",
        lngLat: [-75.633, 35.9642],
        address: "300 W. Carolista Drive, Nags Head, NC 27959",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/jockeys-ridge-state-park",
        zoomLevel: 4
    },
    {
        name: "Jones Lake State Park",
        lngLat: [-78.595420, 34.682743],
        address: "4117 N.C. 242 N., Elizabethtown, NC 28337",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/jones-lake-state-park",
        zoomLevel: 3.2
    },
    {
        name: "Jordan Lake State Recreation Area",
        lngLat: [-79.016569, 35.735554],
        address: "280 State Park Road, Apex, NC 27523",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/jordan-lake-state-recreation-area",
        zoomLevel: 6
    },
    {
        name: "Kerr Lake State Recreation Area",
        lngLat: [-78.368800, 36.441100],
        address: "6254 Satterwhite Point Road, Henderson, NC 27537",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/kerr-lake-state-recreation-area",
        zoomLevel: 4
    },
    {
        name: "Lake James State Park",
        lngLat: [-81.892075, 35.750378],
        address: "7321 N.C. 126, Nebo, NC 28761",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/lake-james-state-park",
        zoomLevel: 6
    },
    {
        name: "Lake Norman State Park",
        lngLat: [-80.9325, 35.672548],
        address: "759 State Park Road, Troutman, NC 28166",
        hours: "Mon-Sun 7AM-8PM",
        website: "https://www.ncparks.gov/lake-norman-state-park",
        zoomLevel: 4
    },
    {
        name: "Lake Waccamaw State Park",
        lngLat: [-78.46548, 34.278985],
        address: "1866 State Park Drive, Lake Waccamaw, NC 28450",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/lake-waccamaw-state-park",
        zoomLevel: 5.5
    },
    {
        name: "Lumber River State Park",
        lngLat: [-79.00222, 34.390023],
        address: "2819 Princess Ann Road, Orrum, NC 28369",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/lumber-river-state-park",
        zoomLevel: 7
    },
    {
        name: "Mayo River State Park",
        lngLat: [-79.947526, 36.439111],
        address: "500 Old Mayo Park Road, Mayodan, NC 27027",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/mayo-river-state-park",
        zoomLevel: 5

    },
    {
        name: "Medoc Mountain State Park",
        lngLat: [-77.8883, 36.2639],
        address: "1541 Medoc State Park Road, Hollister, NC 27844",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/medoc-mountain-state-park",
        zoomLevel: 7

    },
    {
        name: "Merchants Millpond State Park",
        lngLat: [-76.70158, 36.437105],
        address: "176 Millpond Road, Gatesville, NC 27938",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/merchants-millpond-state-park",
        zoomLevel: 6
    },
    {
        name: "Morrow Mountain State Park",
        lngLat: [-80.07347, 35.373724],
        address: "49104 Morrow Mountain Road, Albemarle, NC 28001",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/morrow-mountain-state-park",
        zoomLevel: 3.2

    },
        {
        name: "Mount Jefferson State Natural Area",
        lngLat: [-81.468012, 36.393564],
        address: "1481 Mount Jefferson State Park Road,  West Jefferson, NC 28694",
        hours: "Mon-Sun 8AM-Sunset",
        website: "https://www.ncparks.gov/mount-jefferson-state-natural-area",
        zoomLevel:3.2
    },
    {
        name: "Mount Mitchell State Park",
        lngLat: [-82.2737, 35.7528],
        address: "2388 N.C. 128, Burnsville, NC 28714",
        hours: "Mon-Sun 7AM-10PM",
        website: "https://www.ncparks.gov/mount-mitchell-state-park",
        zoomLevel:6
    },
        {
        name: "New River State Park",
        lngLat: [-81.34035, 36.46768],
        address: "358 New River State Park Road, Laurel Springs, NC 28644",
        hours: "Mon-Sun 7AM-10PM",
        website: "https://www.ncparks.gov/new-river-state-park",
        zoomLevel: 7

    },
    {
        name: "Occoneechee Mountain State Natural Area",
        lngLat: [-79.1169, 36.060835],
        address: "625 Virginia Cates Road, Hillsborough, NC 27278",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/occoneechee-mountain-state-natural-area",
        zoomLevel: 7

    },
    {
        name: "Pettigrew State Park",
        lngLat: [-76.40381, 35.788863],
        address: "2252 Lake Shore Road, Creswell, NC 27928",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/pettigrew-state-park",
        zoomLevel: 0 //hard

    },
    {
        name: "Pilot Mountain State Park",
        lngLat: [-80.462930, 36.341276],
        address: "1792 Pilot Knob Park Road, Pinnacle, NC 27043",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/pilot-mountain-state-park",
        zoomLevel: 4

    },
    {
        name: "Raven Rock State Park",
        lngLat: [-78.9127, 35.4597],
        address: "3009 Raven Rock Road, Lillington, NC 27546",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/raven-rock-state-park",
        zoomLevel: 7
    }, {
        name: "Singletary Lake State Park",
        lngLat: [-78.4496, 34.5831],
        address: "6707 N.C. 53 E., Kelly, NC 28448",
        hours: "Mon-Sun 8AM-5PM",
        website: "https://www.ncparks.gov/singletary-lake-state-park",
        zoomLevel: 7

    }, {
        name: "South Mountains State Park",
        lngLat: [-81.600, 35.5963],
        address: "3001 South Mountain Park Ave., Connelly Springs, NC 28612",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/south-mountains-state-park",
        zoomLevel:3.2
    }, {
        name: "Stone Mountain State Park",
        lngLat: [-81.0273, 36.3873],
        address: "3042 Frank Parkway, Roaring Gap, NC 28668",
        hours: "Mon-Sun 7AM-8PM",
        website: "https://www.ncparks.gov/stone-mountain-state-park",
        zoomLevel: 5 //hard

    },
    {
        name: "Weymouth Woods Sandhills Nature Preserve",
        lngLat: [-79.371661, 35.14704],
        address: "1024 Fort Bragg Road, Southern Pines, NC 28387",
        hours: "Mon-Sun 8AM-8PM",
        website: "https://www.ncparks.gov/weymouth-woods-sandhills-nature-preserve",
        zoomLevel: 5

    },
    {
        name: "William B. Umstead State Park",
        lngLat: [-78.7502, 35.8905],
        address: "8801 Glenwood Avenue, Raleigh, NC 27617",
        hours: "Mon-Sun 7AM-9PM",
        website: "https://www.ncparks.gov/william-b-umstead-state-park",
        zoomLevel: 0 //hard
    },


];

export default ncStateParks;