using GBastos.CRUD_React_API.Models;
using Microsoft.EntityFrameworkCore;

namespace GBastos.CRUD_React_API
{
    public class CategoryDbContext : DbContext
    {
        public CategoryDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Category> Categories { get; set; }
    }
}
