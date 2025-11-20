document.addEventListener('DOMContentLoaded', () => {
    const p = document.getElementById('time')
    p.textContent = 'Page loaded at: ' + new Date().toLocaleString()


    document.getElementById('ping').addEventListener('click', async () => {
        try {
            const res = await fetch('/api/health')
            alert('API responded: ' + (res.ok ? 'OK' : res.status))
        } catch (e) {
            alert('Failed to reach /api/health — this is expected if there is no backend')
        }
    })
})