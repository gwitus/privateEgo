using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace privateEgo.Pages
{
    public class experience : PageModel
    {
        private readonly ILogger<experience> _logger;

        public experience(ILogger<experience> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}