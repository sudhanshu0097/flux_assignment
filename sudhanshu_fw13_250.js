class Sudhanshu{
    constructor(members)
    {
        this.members=members;
        this.expenses={};
        
    }

    // to add a member to trip
    addMember(name)
    {
        let membersPresent=this.members;

        for(let i=0;i<membersPresent.length;i++)
        {
            if(membersPresent[i]==name)
            {
                console.log("Member is already there can't join the trip");
                return;
            }
        }
        membersPresent.push(name)
        this.members=membersPresent;
        console.log(this.members);
        return;
    }

    // to add expenses to the particular member of the trip

    addExpenses(name,amount){
        let expenses=this.expenses;
        let members=this.members;

        for(let i=0;i<members.length;i++)
        {
            if(members[i]==name)
            {
                expenses[name]=amount;
                this.expenses=expenses;
                console.log(`expenses added to ${name} of ${amount}`);
                return;

            }
        }

        console.log("the member that you are trying to  add expenses is not on the trip please provide correct member name");
        return;


       
        
    }

    // to split the money 

    splitMoney(){
        let expenses=this.expenses;
        let arr=[]

        let totalamount=0;
        for(let key in expenses){
            let obj={}
            obj.name=key;
            arr.push(obj)

            obj.amount=expenses[key];
            totalamount+=expenses[key];
        }
        



        let splitamount=totalamount/(Object.keys(expenses).length)

        arr.sort((a,b)=>{
            return a.amount-b.amount;
        })

        // let left=0;
        // let right=arr.length-1;
        let splitarr=[]

       for(let i=0;i<arr.length;i++){
           let left=i;
           let right=arr.length-1;
           let ans=arr[i].name +"--"
           if(arr[i].amount==splitamount)
           {
               console.log("here")
               ans=arr[i].name + " do not owes from anyone"
           }
           
           
            while(left<right){
                if(arr[left].amount<arr[right].amount)
                {
                    let canborrow=arr[right].amount - splitamount
                    let want=splitamount- arr[left].amount

                    if(want>canborrow){
                        arr[left].amount+=canborrow
                        arr[right].amount=arr[right].amount-canborrow;
                        ans=ans+ " owes from "  + arr[right].name + " amount-" + canborrow;
                        right--;
                    }
                    else if(want==canborrow)
                    {
                        arr[left].amount=splitamount
                        arr[right].amount=splitamount;
                        ans=ans=ans+ " owes from "  + arr[right].name + " amount-" + canborrow;
                    }
                    else
                    {
                        arr[left].amount=arr[left].amount+want;
                        arr[right].amount=arr[right].amount-want;
                        ans=ans+ " owes from" +arr[right].name + " amount-" + want;
                        break;
                    }
                }
                else
                {
                    right--;
                }

            }
            splitarr.push(ans)
       }
       console.log(splitarr)
       console.log("splitamount is --" + splitamount)


        
        
    }


    getMembers()
    {  
        console.log(JSON.stringify(this.members))
    }
}


let trip=new Sudhanshu([]);

trip.addMember("sudhanshu");
trip.addMember("kundan");
trip.addMember("shubhamm");


trip.addExpenses("sudhanshu",30)
trip.addExpenses("kundan",30)
trip.addExpenses("shubhamm",30)
// trip.addExpenses("shubhamm",70)

trip.splitMoney();


