
        const badgeData = [
            { name: "Fraction Fundamentals", unlocked: true, icon: "🥇" },
            { name: "Decimal Dynamo", unlocked: false, icon: "🥈" },
            { name: "Geometry Genius", unlocked: true, icon: "🥉" },
            { name: "Algebra Ace", unlocked: false, icon: "✨" },
            { name: "Calculus Champion", unlocked: false, icon: "🌟" },
            { name: "Data Detective", unlocked: true, icon: "🔍" }
        ];

        const badgesContainer = document.getElementById('badges-container');
        function renderBadges() {
            badgesContainer.innerHTML = '';

            badgeData.forEach(badge => {

                const card = document.createElement('div');
                card.className = 'badge-card';
                if (badge.unlocked) {
                    card.classList.add('unlocked');
                }
                const statusText = badge.unlocked ? 'Unlocked!' : 'Locked';
                card.innerHTML = `
                    <div class="badge-icon">${badge.icon}</div>
                    <div class="badge-name">${badge.name}</div>
                    <div class="badge-status">${statusText}</div>
                `;

                badgesContainer.appendChild(card);
            });
        }
        renderBadges();