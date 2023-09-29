using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

namespace GBastos.CRUD_React_API.Models
{
    [ApiController]
    [Route("api/")]
    public class CategoryController : Controller
    {
        private readonly CategoryDbContext dbContext;

        public CategoryController(CategoryDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        [Route("GetCategories")]
        public async Task<IActionResult> GetCategories()
        {
            return Ok(await dbContext.Categories.ToListAsync());
        }

        [HttpGet]
        [Route("GetByGuid/{guid}")]
        public async Task<IActionResult> GetByGuid([FromRoute] Guid guid)
        {
            var category = await dbContext.Categories.FindAsync(guid);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        [HttpGet]
        [Route("GetCategoryByName/{name}")]
        public async Task<IActionResult> GetByName([FromRoute] string name)
        {
            var category = await dbContext.Categories.FirstOrDefaultAsync(c => c.Nome == name);

            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        [HttpPost]
        [Route("AddCategory")]
        public async Task<IActionResult> AddCategory(AddCategoryRequest addCategoryRequest)
        {
            var category = new Category()
            {
                Id = new Guid(),
                Nome = addCategoryRequest.Nome
            };

            await dbContext.Categories.AddAsync(category);
            await dbContext.SaveChangesAsync();

            return Ok(category);
        }

        [HttpPut]
        [Route("UpdateCategory/{guid}")]
        public async Task<IActionResult> UpdateCategory([FromRoute] Guid id, UpdateContactRequest updateContactRequest)
        {
            var category = await dbContext.Categories.FindAsync(id);

            if (category != null)
            {
                category.Nome = updateContactRequest.Nome;
                await dbContext.SaveChangesAsync();
                return Ok(category);
            }

            return NotFound();
        }

        [HttpDelete]
        [Route("DeleteCategory/{guid}")]
        public async Task<IActionResult> DeleteCategory([FromRoute] Guid guid)
        {
            var category = await dbContext.Categories.FindAsync(guid);

            if (category != null)
            {
                dbContext.Remove(category);
                await dbContext.SaveChangesAsync();
                return Ok(category);
            }

            return NotFound();
        }


    }
}