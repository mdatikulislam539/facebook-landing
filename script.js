document.getElementById('submitBtn').addEventListener('click', function() {
    // ইনপুট থেকে ডেটা নেওয়া (যদি থাকে)
    const name = document.getElementById('custName').value || "Not Provided";
    const sim = document.getElementById('simNetwork').value || "Not Selected";
    const payment = document.querySelector('input[name="payMethod"]:checked').value;
    
    // আপনার হোয়াটসঅ্যাপ নম্বর এখানে লিখুন (যেমন: 8801700000000)
    const myNumber = "+8801349967157"; 

    // মেসেজ টেক্সট তৈরি
    // এখানে কোনো 'if' কন্ডিশন নেই, তাই বাটন ক্লিক করলেই সরাসরি হোয়াটসঅ্যাপে যাবে
    const message = `*New VPN Order*%0A` +
                    `------------------%0A` +
                    `*Name:* ${name}%0A` +
                    `*Network:* ${sim}%0A` +
                    `*Payment:* ${payment}`;

    // হোয়াটসঅ্যাপ ইউআরএল তৈরি
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${myNumber}&text=${message}`;
    
    // সরাসরি হোয়াটসঅ্যাপ ওপেন করা
    window.open(whatsappUrl, '_blank');
});