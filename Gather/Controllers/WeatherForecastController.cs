using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Gather.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Gather.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [EnableCors("MyPolicy")]
    [ApiController]
    public class PostDetailsController : ControllerBase
    {
        private PostContext _postContext;

        public PostDetailsController(PostContext postContext)
        {
            _postContext = postContext;
        }

        [HttpGet]
        public List<Post> Get()
        {
            return _postContext.Post.ToList();
        }

        // GET api/<PostController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Post>> GetPost(int id)
        {
            var obj = await _postContext.Post.FindAsync(id);

            if (obj == null)
            {
                return NotFound();
            }

            return obj;
        }

        // POST api/<PostController>
        [HttpPost]
        public async Task<ActionResult<Post>> Post([FromBody] Post post)
        {
            post.CreatedAt = DateTime.Now;
            _postContext.Post.Add(post);
            await _postContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPost), new { id = post.PostId }, post);
        }

        // PUT api/<PostController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Post post)
        {
            if (id != post.PostId)
            {
                return BadRequest();
            }
            post.CreatedAt = DateTime.Now;
            _postContext.Entry(post).State = EntityState.Modified;

            try
            {
                await _postContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE api/<PostController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var obj = await _postContext.Post.FindAsync(id);

            if (obj == null)
            {
                return NotFound();
            }

            _postContext.Post.Remove(obj);
            await _postContext.SaveChangesAsync();

            return NoContent();
        }

        private bool PostExists(long id) =>
         _postContext.Post.Any(e => e.PostId == id);


        /*private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };*/

        /*[HttpGet]
        public WeatherForecast Get(int index)
        {
            return weatherForecasts[index];
        }*/

        /*[HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }*/
    }
}
