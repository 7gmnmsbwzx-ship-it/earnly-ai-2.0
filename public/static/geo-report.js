// Generative Engine Optimization (GEO) Report Dashboard
class EarnlyGEOReport {
  constructor() {
    this.aiPlatforms = [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        icon: 'fas fa-comments',
        score: 94,
        visibility: 89,
        queries: 15420,
        conversions: 2847,
        revenue: 18650,
        trend: 'up',
        change: '+12.4%',
        color: '#10a37f'
      },
      {
        id: 'claude',
        name: 'Claude',
        icon: 'fas fa-brain',
        score: 87,
        visibility: 85,
        queries: 8920,
        conversions: 1654,
        revenue: 12340,
        trend: 'up',
        change: '+8.7%',
        color: '#d97706'
      },
      {
        id: 'gemini',
        name: 'Gemini',
        icon: 'fas fa-gem',
        score: 82,
        visibility: 78,
        queries: 12540,
        conversions: 2156,
        revenue: 14890,
        trend: 'up',
        change: '+15.2%',
        color: '#4285f4'
      },
      {
        id: 'perplexity',
        name: 'Perplexity',
        icon: 'fas fa-search-plus',
        score: 79,
        visibility: 74,
        queries: 6780,
        conversions: 987,
        revenue: 8450,
        trend: 'up',
        change: '+6.8%',
        color: '#8b5cf6'
      }
    ];

    this.optimizationSuggestions = [
      {
        type: 'keyword-optimization',
        priority: 'high',
        title: 'Optimize Query Keywords',
        description: 'Your products appear 34% more often when queries include "AI-powered" or "smart" keywords. Consider optimizing product descriptions.',
        impact: {
          visibilityIncrease: 34,
          estimatedRevenue: 12000,
          implementationTime: '2 days'
        },
        confidence: 92,
        icon: 'fas fa-key'
      },
      {
        type: 'response-optimization',
        priority: 'high',
        title: 'Improve Response Relevance',
        description: 'AI engines rank your products lower due to generic descriptions. Adding specific use cases could improve rankings by 28%.',
        impact: {
          rankingImprovement: 28,
          estimatedConversions: 450,
          implementationTime: '3 days'
        },
        confidence: 87,
        icon: 'fas fa-bullseye'
      },
      {
        type: 'platform-expansion',
        priority: 'medium',
        title: 'Expand to New AI Platforms',
        description: 'Your products are not optimized for Anthropic Claude Pro and Google Bard. Potential 67% revenue increase.',
        impact: {
          marketExpansion: 67,
          estimatedRevenue: 23000,
          implementationTime: '1 week'
        },
        confidence: 78,
        icon: 'fas fa-expand-arrows-alt'
      },
      {
        type: 'timing-optimization',
        priority: 'medium',
        title: 'Optimize Query Timing',
        description: 'AI queries for your products peak at 2-4 PM EST. Adjusting bid timing could increase visibility by 22%.',
        impact: {
          visibilityIncrease: 22,
          costEfficiency: 18,
          implementationTime: 'immediate'
        },
        confidence: 85,
        icon: 'fas fa-clock'
      }
    ];

    this.topQueries = [
      { query: 'best AI-powered productivity tools', rank: 1, impressions: 8420, conversions: 234, score: 94 },
      { query: 'smart home automation devices', rank: 2, impressions: 6780, conversions: 189, score: 89 },
      { query: 'AI writing assistant software', rank: 3, impressions: 5940, conversions: 167, score: 87 },
      { query: 'machine learning course recommendations', rank: 4, impressions: 4320, conversions: 98, score: 82 },
      { query: 'automated marketing tools', rank: 5, impressions: 3890, conversions: 87, score: 79 }
    ];

    this.init();
  }

  init() {
    this.renderAIPlatforms();
    this.renderOptimizationSuggestions();
    this.renderTopQueries();
    this.renderTopQueriesCompact();
    this.renderPlatformRankings();
    this.initializeCharts();
    this.startRealTimeUpdates();
  }

  renderAIPlatforms() {
    const container = document.getElementById('ai-platforms');
    if (!container) return;

    container.innerHTML = this.aiPlatforms.map((platform, index) => `
      <div class="ai-platform-card rounded-2xl p-6 cursor-pointer floating-widget overflow-hidden" 
           style="animation-delay: -${index * 0.3}s;"
           onclick="earnlyGEO.viewPlatformDetails('${platform.id}')">
        <div class="flex items-center justify-between mb-6 gap-2">
          <div class="flex items-center space-x-4 flex-1 min-w-0">
            <div class="w-16 h-16 platform-gradient-${platform.id} rounded-2xl flex items-center justify-center flex-shrink-0">
              <i class="${platform.icon} text-white text-2xl"></i>
            </div>
            <div class="min-w-0">
              <h3 class="font-bold text-white text-xl truncate">${platform.name}</h3>
              <p class="text-gray-300 text-sm truncate">${platform.queries.toLocaleString()} queries</p>
            </div>
          </div>
          <div class="text-right flex-shrink-0">
            <div class="flex items-center justify-end space-x-1">
              <i class="fas fa-arrow-${platform.trend === 'up' ? 'up' : 'down'} text-${platform.trend === 'up' ? 'green' : 'red'}-400 text-sm"></i>
              <span class="text-${platform.trend === 'up' ? 'green' : 'red'}-400 font-bold text-sm whitespace-nowrap">${platform.change}</span>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-gray-300">GEO Score</span>
            <span class="font-bold text-white text-2xl">${platform.score}/100</span>
          </div>
          <div class="w-full bg-black bg-opacity-30 rounded-full h-3">
            <div class="h-3 rounded-full transition-all duration-1000 platform-gradient-${platform.id}" 
                 style="width: ${platform.score}%;"></div>
          </div>

          <div class="grid grid-cols-2 gap-6 mt-6">
            <div class="text-center">
              <p class="text-gray-400 text-sm mb-2">Conversions</p>
              <p class="font-bold text-white text-lg">${platform.conversions.toLocaleString()}</p>
            </div>
            <div class="text-center">
              <p class="text-gray-400 text-sm mb-2">Revenue</p>
              <p class="font-bold text-white text-lg">$${platform.revenue.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderOptimizationSuggestions() {
    const container = document.getElementById('optimization-suggestions');
    if (!container) return;

    container.innerHTML = this.optimizationSuggestions.map((suggestion, index) => `
      <div class="ai-suggestions rounded-2xl p-8 backdrop-blur-lg floating-widget" style="animation-delay: -${index * 0.4}s;">
        <div class="flex items-start space-x-6">
          <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 glow-effect">
            <i class="${suggestion.icon} text-white text-xl"></i>
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between mb-4">
              <h3 class="font-bold text-white text-xl">${suggestion.title}</h3>
              <span class="px-4 py-2 bg-${suggestion.priority === 'high' ? 'red' : 'yellow'}-500 bg-opacity-20 text-${suggestion.priority === 'high' ? 'red' : 'yellow'}-400 text-sm font-bold rounded-xl uppercase backdrop-blur-lg border border-${suggestion.priority === 'high' ? 'red' : 'yellow'}-500 border-opacity-30">
                ${suggestion.priority}
              </span>
            </div>
            <p class="text-gray-300 mb-6 leading-relaxed">${suggestion.description}</p>
            
            <div class="grid grid-cols-2 gap-6 mb-6">
              ${Object.entries(suggestion.impact).map(([key, value]) => `
                <div class="bg-black bg-opacity-20 rounded-xl p-4 backdrop-blur-lg">
                  <span class="text-gray-400 text-sm block mb-1">${key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span>
                  <span class="font-bold text-white text-lg">
                    ${typeof value === 'number' ? (key.includes('Revenue') || key.includes('revenue') ? `$${value.toLocaleString()}` : `+${value}%`) : value}
                  </span>
                </div>
              `).join('')}
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 bg-green-400 rounded-full pulse-glow"></div>
                <span class="text-gray-300">${suggestion.confidence}% confidence</span>
              </div>
              <button class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105" onclick="earnlyGEO.implementSuggestion('${suggestion.type}')">
                Implement Now
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderTopQueries() {
    const container = document.getElementById('top-queries');
    if (!container) return;

    container.innerHTML = this.topQueries.map((query, index) => `
      <div class="flex items-center justify-between p-6 bg-white bg-opacity-5 rounded-2xl hover:bg-opacity-10 transition-all backdrop-blur-lg border border-white border-opacity-10 hover:border-opacity-20">
        <div class="flex items-center space-x-6">
          <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl flex items-center justify-center font-bold text-lg">
            ${query.rank}
          </div>
          <div>
            <p class="font-semibold text-white text-lg mb-2">"${query.query}"</p>
            <p class="text-gray-300">${query.impressions.toLocaleString()} impressions • ${query.conversions} conversions</p>
          </div>
        </div>
        <div class="text-right">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 relative">
              <svg class="w-16 h-16 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" fill="transparent" class="text-white text-opacity-20"/>
                <circle cx="32" cy="32" r="28" stroke="currentColor" stroke-width="4" fill="transparent" class="text-blue-400" 
                  stroke-dasharray="176" stroke-dashoffset="${176 - (query.score / 100) * 176}" stroke-linecap="round"/>
              </svg>
              <div class="absolute inset-0 flex items-center justify-center">
                <span class="text-sm font-bold text-white">${query.score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderTopQueriesCompact() {
    const container = document.getElementById('top-queries-compact');
    if (!container) return;

    // Show only top 3 queries in compact format
    const topThreeQueries = this.topQueries.slice(0, 3);
    
    container.innerHTML = topThreeQueries.map((query, index) => `
      <div class="flex items-center justify-between p-3 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
            ${query.rank}
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-medium text-white text-sm truncate">"${query.query}"</p>
            <p class="text-gray-400 text-xs">${query.impressions.toLocaleString()} imp • ${query.conversions} conv</p>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 relative">
            <svg class="w-10 h-10 transform -rotate-90">
              <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3" fill="transparent" class="text-white text-opacity-20"/>
              <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="3" fill="transparent" class="text-blue-400" 
                stroke-dasharray="100" stroke-dashoffset="${100 - query.score}" stroke-linecap="round"/>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-xs font-bold text-white">${query.score}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  renderPlatformRankings() {
    const container = document.getElementById('platform-rankings');
    if (!container) return;

    const topPlatforms = this.aiPlatforms.slice(0, 4);
    
    container.innerHTML = topPlatforms.map((platform, index) => `
      <div class="flex items-center justify-between p-2 bg-white bg-opacity-5 rounded-lg hover:bg-opacity-10 transition-all">
        <div class="flex items-center space-x-3">
          <div class="w-7 h-7 ${this.getPlatformGradient(platform.name)} rounded-lg flex items-center justify-center">
            <i class="${this.getPlatformIcon(platform.name)} text-white text-xs"></i>
          </div>
          <div class="flex-1">
            <div class="font-medium text-white text-sm">${platform.name}</div>
            <div class="text-xs text-gray-400">${platform.queries.toLocaleString()} queries</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm font-bold ${this.getPlatformColor(platform.name)}">${platform.score}</div>
          <div class="text-xs text-gray-400">${platform.change}</div>
        </div>
      </div>
    `).join('');
  }

  getPlatformGradient(platformName) {
    const gradients = {
      'ChatGPT': 'bg-gradient-to-r from-green-500 to-emerald-600',
      'Claude': 'bg-gradient-to-r from-orange-500 to-red-600', 
      'Gemini': 'bg-gradient-to-r from-blue-500 to-indigo-600',
      'Perplexity': 'bg-gradient-to-r from-purple-500 to-violet-600'
    };
    return gradients[platformName] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  }

  getPlatformIcon(platformName) {
    const icons = {
      'ChatGPT': 'fas fa-comments',
      'Claude': 'fas fa-brain',
      'Gemini': 'fas fa-gem',
      'Perplexity': 'fas fa-search'
    };
    return icons[platformName] || 'fas fa-robot';
  }

  getPlatformColor(platformName) {
    const colors = {
      'ChatGPT': 'text-green-400',
      'Claude': 'text-orange-400',
      'Gemini': 'text-blue-400', 
      'Perplexity': 'text-purple-400'
    };
    return colors[platformName] || 'text-gray-400';
  }

  initializeCharts() {
    // Optimization Score Trends Chart
    const trendCtx = document.getElementById('optimization-trends-chart');
    if (trendCtx) {
      new Chart(trendCtx, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
          datasets: [{
            label: 'Overall GEO Score',
            data: [78, 82, 85, 87, 89, 94],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#3b82f6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1,
            pointRadius: 4
          }, {
            label: 'AI Visibility Score',
            data: [72, 76, 80, 83, 85, 87],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 1,
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                font: {
                  size: 11,
                  weight: 'bold'
                },
                boxWidth: 12,
                boxHeight: 12,
                padding: 15
              }
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#ffffff',
                font: {
                  size: 10
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                lineWidth: 1
              }
            },
            y: {
              beginAtZero: false,
              min: 70,
              max: 100,
              ticks: {
                color: '#ffffff',
                font: {
                  size: 10
                },
                stepSize: 10
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                lineWidth: 1
              }
            }
          },
          elements: {
            point: {
              hoverRadius: 6
            }
          }
        }
      });
    }

    // AI Query Performance Chart
    const queryCtx = document.getElementById('query-performance-chart');
    if (queryCtx) {
      new Chart(queryCtx, {
        type: 'bar',
        data: {
          labels: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity'],
          datasets: [{
            label: 'Query Volume',
            data: [15420, 8920, 12540, 6780],
            backgroundColor: [
              'rgba(16, 163, 127, 0.7)',
              'rgba(217, 119, 6, 0.7)',
              'rgba(66, 133, 244, 0.7)',
              'rgba(139, 92, 246, 0.7)'
            ],
            borderColor: [
              '#10a37f',
              '#d97706',
              '#4285f4',
              '#8b5cf6'
            ],
            borderWidth: 1,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            x: {
              ticks: {
                color: '#ffffff',
                font: {
                  size: 10,
                  weight: 'bold'
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                lineWidth: 1
              }
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#ffffff',
                font: {
                  size: 10
                },
                callback: function(value) {
                  return value >= 1000 ? (value / 1000) + 'K' : value;
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                lineWidth: 1
              }
            }
          }
        }
      });
    }

    // Query Categories Chart
    const categoriesCtx = document.getElementById('query-categories-chart');
    if (categoriesCtx) {
      new Chart(categoriesCtx, {
        type: 'doughnut',
        data: {
          labels: ['Product Info', 'Comparisons', 'How-to', 'Reviews', 'Pricing', 'Support'],
          datasets: [{
            data: [35, 28, 15, 12, 7, 3],
            backgroundColor: [
              'rgba(59, 130, 246, 0.8)',
              'rgba(16, 185, 129, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(239, 68, 68, 0.8)',
              'rgba(139, 92, 246, 0.8)',
              'rgba(6, 182, 212, 0.8)'
            ],
            borderColor: [
              '#3b82f6',
              '#10b981',
              '#f59e0b',
              '#ef4444',
              '#8b5cf6',
              '#06b6d4'
            ],
            borderWidth: 3,
            hoverOffset: 8
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                font: {
                  size: 12,
                  weight: 'bold'
                },
                padding: 15
              }
            }
          }
        }
      });
    }
  }

  viewPlatformDetails(platformId) {
    const platform = this.aiPlatforms.find(p => p.id === platformId);
    if (!platform) return;

    // Create modal for platform details
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="geo-card rounded-3xl p-10 max-w-3xl w-full mx-4 max-h-screen overflow-y-auto">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 platform-gradient-${platform.id} rounded-2xl flex items-center justify-center">
              <i class="${platform.icon} text-white text-2xl"></i>
            </div>
            <h2 class="text-3xl font-bold text-white">${platform.name} Performance Details</h2>
          </div>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="text-gray-400 hover:text-white transition-colors">
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-8 mb-10">
          <div class="text-center p-6 bg-black bg-opacity-20 rounded-2xl backdrop-blur-lg">
            <h3 class="text-4xl font-bold text-white mb-2">${platform.score}/100</h3>
            <p class="text-gray-300">GEO Score</p>
          </div>
          <div class="text-center p-6 bg-black bg-opacity-20 rounded-2xl backdrop-blur-lg">
            <h3 class="text-4xl font-bold text-white mb-2">${platform.queries.toLocaleString()}</h3>
            <p class="text-gray-300">Total Queries</p>
          </div>
        </div>

        <div class="space-y-6 mb-8">
          <div class="flex justify-between items-center p-4 bg-black bg-opacity-20 rounded-xl backdrop-blur-lg">
            <span class="text-gray-300 text-lg">Visibility Score:</span>
            <span class="font-bold text-white text-xl">${platform.visibility}/100</span>
          </div>
          <div class="flex justify-between items-center p-4 bg-black bg-opacity-20 rounded-xl backdrop-blur-lg">
            <span class="text-gray-300 text-lg">Conversions:</span>
            <span class="font-bold text-white text-xl">${platform.conversions.toLocaleString()}</span>
          </div>
          <div class="flex justify-between items-center p-4 bg-black bg-opacity-20 rounded-xl backdrop-blur-lg">
            <span class="text-gray-300 text-lg">Revenue:</span>
            <span class="font-bold text-white text-xl">$${platform.revenue.toLocaleString()}</span>
          </div>
          <div class="flex justify-between items-center p-4 bg-black bg-opacity-20 rounded-xl backdrop-blur-lg">
            <span class="text-gray-300 text-lg">Growth Trend:</span>
            <span class="font-bold text-${platform.trend === 'up' ? 'green' : 'red'}-400 text-xl">${platform.change}</span>
          </div>
        </div>

        <div class="pt-6 border-t border-white border-opacity-20">
          <button class="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-2xl text-lg font-bold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Optimize ${platform.name} Performance
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  implementSuggestion(suggestionType) {
    const suggestion = this.optimizationSuggestions.find(s => s.type === suggestionType);
    if (!suggestion) return;

    // Show implementation confirmation
    const confirmation = confirm(`Implement "${suggestion.title}"?\n\nThis will take approximately ${suggestion.impact.implementationTime} and has a ${suggestion.confidence}% success probability.`);
    
    if (confirmation) {
      // Simulate implementation
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50';
      notification.innerHTML = `
        <div class="flex items-center space-x-2">
          <i class="fas fa-check-circle"></i>
          <span>Optimization "${suggestion.title}" has been queued for implementation!</span>
        </div>
      `;
      
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.remove();
      }, 5000);
    }
  }

  startRealTimeUpdates() {
    // Simulate real-time updates
    setInterval(() => {
      // Update overall score with small random variations
      const scoreElement = document.getElementById('overall-score');
      if (scoreElement) {
        const currentScore = parseInt(scoreElement.textContent);
        const newScore = Math.max(0, Math.min(100, currentScore + (Math.random() - 0.5) * 2));
        scoreElement.textContent = Math.round(newScore);
      }

      // Update visibility score
      const visibilityElement = document.getElementById('visibility-score');
      if (visibilityElement) {
        const currentScore = parseInt(visibilityElement.textContent);
        const newScore = Math.max(0, Math.min(100, currentScore + (Math.random() - 0.5) * 1.5));
        visibilityElement.textContent = Math.round(newScore);
      }

      // Update conversion rate
      const conversionElement = document.getElementById('conversion-rate');
      if (conversionElement) {
        const currentRate = parseFloat(conversionElement.textContent);
        const newRate = Math.max(0, currentRate + (Math.random() - 0.5) * 0.3);
        conversionElement.textContent = newRate.toFixed(1) + '%';
      }

      // Update AI revenue
      const revenueElement = document.getElementById('ai-revenue');
      if (revenueElement) {
        const currentRevenue = parseFloat(revenueElement.textContent.replace('$', '').replace('K', ''));
        const newRevenue = Math.max(0, currentRevenue + (Math.random() - 0.3) * 2);
        revenueElement.textContent = `$${newRevenue.toFixed(1)}K`;
      }
    }, 3000);
  }

  async bookDemo() {
    // Show demo booking success notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-xl z-50';
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <i class="fas fa-calendar-check text-2xl"></i>
        <div>
          <div class="font-bold text-lg">Demo Requested!</div>
          <div class="text-sm opacity-90">Our team will contact you within 24 hours</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
    
    // Redirect to demo booking page
    setTimeout(() => {
      window.location.href = '/get-started';
    }, 1000);
  }

  scheduleCall() {
    // Create modal for demo scheduling options
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-70 backdrop-blur-lg flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="geo-card rounded-3xl p-10 max-w-lg w-full mx-4">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">
          <i class="fas fa-video mr-3 text-blue-400"></i>
          Schedule Your Demo
        </h2>
        
        <div class="space-y-6">
          <div>
            <label class="block text-lg font-medium text-gray-300 mb-3">Preferred Time</label>
            <select class="w-full bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl px-4 py-3 text-white backdrop-blur-lg">
              <option value="morning">Morning (9am - 12pm)</option>
              <option value="afternoon">Afternoon (12pm - 5pm)</option>
              <option value="evening">Evening (5pm - 8pm)</option>
            </select>
          </div>
          
          <div>
            <label class="block text-lg font-medium text-gray-300 mb-3">Your Email</label>
            <input type="email" placeholder="Enter your email address" class="w-full bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl px-4 py-3 text-white placeholder-gray-400 backdrop-blur-lg">
          </div>
          
          <div>
            <label class="block text-lg font-medium text-gray-300 mb-3">Company/Website</label>
            <input type="text" placeholder="Your company or website" class="w-full bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl px-4 py-3 text-white placeholder-gray-400 backdrop-blur-lg">
          </div>

          <div>
            <label class="block text-lg font-medium text-gray-300 mb-3">Demo Focus</label>
            <select class="w-full bg-black bg-opacity-30 border border-white border-opacity-20 rounded-xl px-4 py-3 text-white backdrop-blur-lg">
              <option value="geo-optimization">GEO Optimization</option>
              <option value="ai-monetization">AI Monetization</option>
              <option value="full-platform">Full Platform Tour</option>
            </select>
          </div>
        </div>

        <div class="flex space-x-4 mt-8">
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="flex-1 bg-gray-600 bg-opacity-50 text-white py-3 rounded-xl font-semibold hover:bg-opacity-70 transition-colors backdrop-blur-lg">
            Cancel
          </button>
          <button onclick="earnlyGEO.confirmDemo(); this.parentElement.parentElement.parentElement.remove();" class="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            <i class="fas fa-calendar-check mr-2"></i>
            Book Demo
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  confirmDemo() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-xl shadow-xl z-50';
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <i class="fas fa-calendar-check text-2xl"></i>
        <div>
          <div class="font-bold text-lg">Demo Scheduled!</div>
          <div class="text-sm opacity-90">Check your email for confirmation details</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);

    // Redirect to get started page after a short delay
    setTimeout(() => {
      window.location.href = '/get-started';
    }, 2000);
  }
}

// Free Report Generator Functions
function updateReportPreview() {
  const websiteUrl = document.getElementById('website-url')?.value || 'etsy.com';
  const industry = document.getElementById('report-industry')?.value || 'marketplace';
  
  // Update the preview section dynamically based on input
  console.log(`Updating preview for ${websiteUrl} in ${industry} industry`);
  
  // Simulate real-time data updates
  if (websiteUrl.includes('etsy')) {
    updateEtsyPreview();
  } else {
    updateGenericPreview(websiteUrl, industry);
  }
}

function updateEtsyPreview() {
  // Keep the existing Etsy preview as shown
  console.log('Showing Etsy.com preview data');
}

function updateGenericPreview(url, industry) {
  // Update preview for other websites
  const industryData = {
    'ecommerce': { chatgpt: '5.2K', claude: '3.8K', gemini: '2.9K' },
    'saas': { chatgpt: '12.1K', claude: '9.4K', gemini: '7.2K' },
    'retail': { chatgpt: '6.7K', claude: '4.3K', gemini: '3.1K' },
    'services': { chatgpt: '8.9K', claude: '6.2K', gemini: '4.5K' },
    'marketplace': { chatgpt: '8.7K', claude: '6.2K', gemini: '4.9K' }
  };
  
  const data = industryData[industry] || industryData['ecommerce'];
  console.log(`Generic preview for ${url}:`, data);
}

function generateFreeReport() {
  const websiteUrl = document.getElementById('website-url')?.value;
  const industry = document.getElementById('report-industry')?.value;
  const region = document.getElementById('report-region')?.value;
  
  if (!websiteUrl) {
    alert('Please enter a website URL to generate your report.');
    return;
  }
  
  // Show loading state
  const button = document.querySelector('button[onclick="generateFreeReport()"]');
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Generating Report...';
  button.disabled = true;
  
  // Simulate report generation
  setTimeout(() => {
    // Reset button
    button.innerHTML = originalText;
    button.disabled = false;
    
    // Show success notification
    showReportGeneratedNotification(websiteUrl);
    
    // Scroll to the main dashboard
    document.querySelector('.py-16.bg-gray-900').scrollIntoView({ 
      behavior: 'smooth' 
    });
  }, 3000);
  
  // Track the event for analytics
  console.log('Free GEO Report Generated:', {
    website: websiteUrl,
    industry,
    region,
    timestamp: new Date().toISOString()
  });
}

function startAdvertiserCampaign() {
  // Redirect to advertisers page with pre-filled data
  const websiteUrl = document.getElementById('website-url')?.value || 'etsy.com';
  
  // Show interest capture
  const confirmed = confirm(
    `Start advertising campaign targeting ${websiteUrl} audience?\n\n` +
    `Our AI analysis shows high-value opportunities for contextual advertising ` +
    `in this market segment.\n\n` +
    `Click OK to set up your campaign with our advertising specialists.`
  );
  
  if (confirmed) {
    // Track advertiser interest
    console.log('Advertiser Campaign Interest:', {
      targetWebsite: websiteUrl,
      timestamp: new Date().toISOString(),
      source: 'geo-report-generator'
    });
    
    // Redirect to advertisers page
    window.location.href = '/for-advertisers?source=geo-report&target=' + encodeURIComponent(websiteUrl);
  }
}

function showReportGeneratedNotification(websiteUrl) {
  const notification = document.createElement('div');
  notification.className = 'fixed top-20 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm';
  notification.innerHTML = `
    <div class="flex items-center space-x-3">
      <i class="fas fa-check-circle text-xl"></i>
      <div>
        <div class="font-semibold">Report Generated!</div>
        <div class="text-sm opacity-90">GEO analysis for ${websiteUrl} is ready below</div>
      </div>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Global functions
function bookDemo() {
  // Redirect to demo booking page
  window.location.href = '/get-started';
}

function scheduleCall() {
  // Open email client for scheduling
  window.location.href = 'mailto:demo@earnly.app?subject=Schedule Demo Call&body=Hi, I would like to schedule a demo of Earnly\'s GEO optimization platform.';
}

function contactSales() {
  // Redirect to contact page
  window.location.href = '/contact';
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  window.earnlyGEO = new EarnlyGEOReport();
});

// Book Demo Function
function bookDemo() {
    // Show booking modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 relative">
            <button onclick="closeBookingModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">&times;</button>
            
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-calendar-check text-white text-2xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Book Your GEO Demo</h3>
                <p class="text-gray-600">Get a personalized walkthrough of your AI search optimization potential</p>
            </div>
            
            <div class="space-y-4">
                <input type="text" id="demo-name" placeholder="Your Name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <input type="email" id="demo-email" placeholder="Email Address" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <input type="text" id="demo-company" placeholder="Company Name" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <input type="url" id="demo-website" placeholder="Website URL (optional)" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                
                <button onclick="submitDemo()" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold text-lg transition-all shadow-lg">
                    Schedule Demo
                </button>
                
                <p class="text-xs text-gray-500 text-center mt-3">
                    We'll send you a calendar invite within 24 hours
                </p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.id = 'booking-modal';
}

function closeBookingModal() {
    const modal = document.getElementById('booking-modal');
    if (modal) {
        modal.remove();
    }
}

function submitDemo() {
    const name = document.getElementById('demo-name').value;
    const email = document.getElementById('demo-email').value;
    const company = document.getElementById('demo-company').value;
    const website = document.getElementById('demo-website').value;
    
    if (!name || !email || !company) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Show success message
    const modal = document.getElementById('booking-modal');
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-lg w-full mx-4 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-check text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Demo Requested!</h3>
            <p class="text-gray-600 mb-6">
                Thanks ${name}! We'll analyze your GEO potential and send you a personalized demo invite within 24 hours.
            </p>
            <button onclick="closeBookingModal()" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all">
                Got it!
            </button>
        </div>
    `;
    
    // Auto-close after 3 seconds
    setTimeout(closeBookingModal, 3000);
}
