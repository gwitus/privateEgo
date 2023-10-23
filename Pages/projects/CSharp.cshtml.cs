using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace privateEgo.Pages.projects
{
    public class CSharp : PageModel
    {
        private readonly ILogger<CSharp> _logger;

        public CSharp(ILogger<CSharp> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}