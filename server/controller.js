module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense!", "A beautiful, smart, and loving person will be coming into your life!", "A lifetime of happiness lies ahead of you!", "Believe in yourself and others will too!", "Better ask twice than lose yourself once!"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    
    createFortuneList: (req, res) => {
        const fortuneList = ["An inch of time is an inch of gold.", "Believe it can be done.", "Bide your time, for success is near.", "Dedicate yourself with a calm mind to the task at hand.", "Do not just think, act!", "Failure is the chance to do better next time."];
        res.status(200).json(fortuneList);
    },
    
    fortuneSearch: (req, res) => {
        const fortuneList = ["An inch of time is an inch of gold.", "Believe it can be done.", "Bide your time, for success is near.", "Dedicate yourself with a calm mind to the task at hand.", "Do not just think, act!", "Failure is the chance to do better next time."];
        const { index } = req.params;
        res.status(200).json(fortuneList[index]);
    },

    deleteFortune: (req, res) => {
        
        const fortuneList = ["An inch of time is an inch of gold.", "Believe it can be done.", "Bide your time, for success is near.", "Dedicate yourself with a calm mind to the task at hand.", "Do not just think, act!", "Failure is the chance to do better next time."];
        const { index } = req.params;
        fortuneList.splice(index, 1)
        res.status(200).json([fortuneList]);
    }

}