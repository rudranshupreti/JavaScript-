const slot = [
    { date: "2024-09-11", isBooked: true, _id: 231132 },
    { date: "2024-09-11", isBooked: true, _id: 231131 },
    { date: "2024-09-11", isBooked: true, _id: 231133 },
    { date: "2024-09-12", isBooked: true, _id: 231134 },
    { date: "2024-09-12", isBooked: true, _id: 231135 },
    { date: "2024-09-12", isBooked: true, _id: 231136 },
  ];
  

function groupslotByDate (slots){
    const groupSlots = {};
    slot.forEach((slot) => {
        if(!groupSlots[slot.date]){
            groupSlots[slot.date] = [];
        }
        groupSlots[slot.date].push({
            isBooked: slot.isBooked,
            _id: slot._id,
    });
    
        
    });
    const result = Object.keys(groupSlots).map((date) => ({
        date: date,
        slots: groupSlots[date],
      }));

      return result;
}

const result  = groupslotByDate(slot);
console.log(result)