// هذا السكربت يمكنه إضافة تأثيرات بسيطة مثل تغيير النص عند الضغط على زر.
document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('تم إضافة الوجبة إلى سلة الشراء!');
        });
    });
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // الحصول على بيانات النموذج
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dish = document.getElementById('dish').value;
    const quantity = document.getElementById('quantity').value;

    // إرسال البيانات إلى الخادم أو عرض رسالة تأكيد (حسب الحاجة)
    alert(`تم استلام طلبك!\nالاسم: ${name}\nالبريد الإلكتروني: ${email}\nالوجبة: ${dish}\nالعدد: ${quantity}`);
});

function startChat() {
    alert("شكرًا على تواصلك معنا! سيتم الرد عليك قريبًا.");
}
